export default async function handler(req, res) {
  await fetch('https://onesignal.com/api/v1/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic l3ir22qnrewgn6crjfecwc5c6'
    },
    body: JSON.stringify({
      app_id: '193f21fd-5c25-4ab8-935a-a984ecc03539',
      included_segments: ['Total Subscriptions'],
      headings: { he: 'LIOR TRAY 💊' },
      contents: { he: 'היי ליאורי, הגיע הזמן לקחת את התוספים! ✨' }
    })
  });
  
  res.status(200).json({ success: true });
}
