/** @type {import('./$types').LayoutLoad} */

import { initializeFirebase, auth } from '$lib/firebase/init';
import { browser } from '$app/environment';
import { onAuthStateChanged } from 'firebase/auth';

export async function load({ url }) {
    console.log('layout load');
    if (browser) {
        console.log('browser');
        try {
            initializeFirebase();
        } catch (error) {
            console.error(error);
        }
    }

    function getAuthUser() {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    resolve(user);
                } else {
                    resolve(null);
                }
            });
        }
        );
    }


    return {
        getAuthUser: getAuthUser,
        url: url.pathname
    };
}