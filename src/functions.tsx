import { useState, useEffect } from 'react';
import axios from 'axios';

export const checkRepo = async (username: string, repo: string) => {
    const url = `https://api.github.com/repos/${username}/${repo}`
    try {
        let response = await axios(url, {
            method: 'POST',
        });
        return response;
    } catch (e: any) {
        console.log('Error: checkRepo', e.response.data);
        throw e.response;
    }
};
