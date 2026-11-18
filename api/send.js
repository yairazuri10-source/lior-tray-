export default async function handler(req, res) {
  try {
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Key l3ir22qnrewgn6crjfecwc5c6'
      },
      body: JSON.stringify({
        app_id: '193f21fd-5c25-4ab8-935a-a984ecc03539',
        included_segments: ['Total Subscriptions'],
        headings: {
          "en": "LIOR TRAY 💊",
          "he": "LIOR TRAY 💊"
        },
        contents: {
          "en": "היי ליאורי, הגיע הזמן לקחת את התוספים! ✨",
          "he": "היי ליאורי, הגיע הזמן לקחת את התוספים! ✨"
        }
      })
    });

    const data = await response.json();
    return res.status(200).json({ success: true, onesignal: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
