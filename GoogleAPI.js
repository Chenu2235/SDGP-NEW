import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

const GoogleCalendar = () => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: SCOPES,
            });
        };

        gapi.load('client:auth2', initClient);
    }, []);

    const handleSignIn = () => {
        gapi.auth2.getAuthInstance().signIn().then(() => {
            console.log('User signed in');
        });
    };

    const handleSignOut = () => {
        gapi.auth2.getAuthInstance().signOut().then(() => {
            console.log('User signed out');
        });
    };

    const createEvent = () => {
        const event = {
            summary: 'Appointment with Client',
            location: 'Online',
            description: 'Discuss project details',
            start: {
                dateTime: '2024-12-28T10:00:00-07:00', // Update this to desired start time
                timeZone: 'America/Los_Angeles',
            },
            end: {
                dateTime: '2024-12-28T11:00:00-07:00', // Update this to desired end time
                timeZone: 'America/Los_Angeles',
            },
            attendees: [{ email: 'example@gmail.com' }], // Add attendees
        };

        gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
        }).then(response => {
            console.log('Event created:', response.result);
        }).catch(err => {
            console.error('Error creating event:', err);
        });
    };

    return (
        <div>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>
            <button onClick={createEvent}>Create Event</button>
        </div>
    );
};

export default GoogleCalendar;
