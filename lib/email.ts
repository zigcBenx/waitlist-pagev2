import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string) {
  try {
    console.log('Attempting to send email to:', email)
    console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
        from: 'Žiga <ziga@benxlabs.com>',
        to: [email],
        subject: 'Your 14-Day Side Business Blueprint Has Arrived! 🚀',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h1 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">Your Developer's Side Business Blueprint Is Here!</h1>
            
            <p style="font-size: 16px;">Hey there fellow developer,</p>
            
            <p style="font-size: 16px;">I'm thrilled you've taken the first step toward building your own profitable side business! What you're about to receive has helped hundreds of developers just like you launch successful side hustles while keeping their day jobs.</p>
            
            <p style="font-size: 16px;"><strong>Inside your 14-Day Side Business Launch Plan you'll discover:</strong></p>
            
            <ul style="font-size: 16px;">
              <li>Day-by-day actions that take just ONE hour each</li>
              <li>My personal "no-code" shortcuts that save weeks of development time</li>
              <li>The exact validation process I used to earn my first $1,000</li>
              <li>6 exclusive bonus tips most developers never discover until it's too late</li>
            </ul>
            
            <div style="background-color: #f0f7ff; border-left: 4px solid #0066cc; padding: 15px; margin: 20px 0;">
              <p style="font-size: 16px; margin: 0;"><strong>🔐 DOWNLOAD YOUR EXCLUSIVE PLAN:</strong></p>
              <p style="text-align: center; margin: 15px 0;">
                <a href="https://jwcbizkcgiisezljjjvq.supabase.co/storage/v1/object/public/leadmagnets//the14daySideBusinessPlan.pdf" style="background-color: #0066cc; color: white; padding: 12px 20px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;">GET YOUR BLUEPRINT NOW</a>
              </p>
            </div>
            
            <p style="font-size: 16px;">I can't wait to see what you build in the next 14 days!</p>
            
            <p style="font-size: 16px;">To your success,<br><strong>Žiga</strong></p>
            
            <p style="font-size: 14px; color: #666; border-top: 1px solid #eee; margin-top: 20px; padding-top: 10px;">P.S. Keep an eye on your inbox - I'll be checking in with some additional tips to help you along the way!</p>
          </div>
        `
      })

    console.log('Resend response data:', data)

    if (error) {
      console.error('Detailed Resend Email Error:', JSON.stringify(error, null, 2))
      return false
    }

    return true
  } catch (err) {
    console.error('Comprehensive Email Error:', err)
    return false
  }
}