const twilio = require('twilio');

// Initialize Twilio client only if credentials are valid
let client = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID.startsWith('AC')) {
  client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

// Send SMS notification to customer
exports.sendBookingConfirmation = async (phone, name, service, date, time, price, paymentMethod) => {
  try {
    const message = `Hi ${name}, Your appointment for ${service} (₹${price}) on ${date} at ${time} via ${paymentMethod}. Call: 8317097467`;
    
    // If Twilio is configured, send real SMS
    if (client && process.env.TWILIO_PHONE_NUMBER) {
      await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${phone}` // assuming Indian numbers
      });
      console.log(`[SMS SENT] Confirmation sent to ${phone}`);
    } else {
      // For demo/free version: just log the message (no Twilio configured)
      console.log(`[SMS LOG] ${message}`);
    }
    return true;
  } catch (error) {
    console.error('SMS Error:', error.message);
    // Don't fail the booking if SMS fails
    return false;
  }
};
