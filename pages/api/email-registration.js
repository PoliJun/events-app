import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const { method } = req;
  // Access our data
  // Extract our data (AllEvents)
  // res 404 if there are no AllEvents
  // AllEvents - loop through them and identify the event ID
  // Add the email into emails registered
  // only if that email doesn't exist
  // check the format of the email is ok

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({ status: 404, message: 'No events found' });
  }

  if (method === 'POST') {
    const { email, eventId } = req.body;
    // we add our code here
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: 'This email has already been registered' });
          // console.log(res);
          return ev;
        }
        return { ...ev, emails_registered: [...ev.emails_registered, email] };
      }
      return ev;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents }),
    );
    res.status(200).json({
      message: `You have been registered to the event with id ${eventId} with email ${email}`,
    });
  }
}
