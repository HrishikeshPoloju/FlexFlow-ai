/**
 * PushNotify Service Worker
 * 
 * Handles background push notifications from Firebase Cloud Messaging.
 */

// Import Firebase Messaging scripts
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Firebase config will be injected during installation or fetched
// Note: Service worker needs minimal config - just enough for messaging
firebase.initializeApp({
    apiKey: 'AIzaSyAO6Vdfc_wpiH80wn2D87_VsdCusVcKyz4',
    authDomain: 'pushnotifysaas.firebaseapp.com',
    projectId: 'pushnotifysaas',
    storageBucket: 'pushnotifysaas.firebasestorage.app',
    messagingSenderId: '460669279799',
    appId: '1:460669279799:web:0943182c8eb3010fa429b2',
});

const messaging = firebase.messaging();

// Handle background messages (when the page is not in focus)
messaging.onBackgroundMessage((payload) => {
    console.log('[PushNotify SW] Background message received:', payload);

    const notificationTitle = payload.notification?.title || payload.data?.title || 'New Notification';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || '',
        icon: payload.notification?.icon || payload.data?.icon || '/favicon.ico',
        badge: '/favicon.ico',
        tag: payload.messageId || 'pushnotify-' + Date.now(),
        data: {
            url: payload.data?.click_action || payload.fcmOptions?.link || '/',
        },
        // Actions (optional)
        actions: [
            {
                action: 'open',
                title: 'Open',
            },
        ],
        // Vibration pattern
        vibrate: [200, 100, 200],
        // Require interaction (notification doesn't auto-dismiss on some platforms)
        requireInteraction: true,
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    console.log('[PushNotify SW] Notification clicked:', event);

    event.notification.close();

    const url = event.notification.data?.url || '/';

    // Open the URL in a new tab or focus an existing one
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            // Check if there's already a window open with the target URL
            for (const client of windowClients) {
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If no window is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

// Handle service worker installation
self.addEventListener('install', (event) => {
    console.log('[PushNotify SW] Service Worker installed');
    self.skipWaiting();
});

// Handle service worker activation
self.addEventListener('activate', (event) => {
    console.log('[PushNotify SW] Service Worker activated');
    event.waitUntil(clients.claim());
});
