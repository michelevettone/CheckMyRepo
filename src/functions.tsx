import axios from 'axios';

export const checkExistingRepo = async (username: string, repo: string) => {
    const url = `https://api.github.com/repos/${username}/${repo}`;
    try {
        let response = await axios(url, {
            method: 'GET',
        });
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (e: any) {
        console.log('Error: checkRepo', e.response.data);
        return false;
    }
};

export const sendMessage = async (username: string, repo: string) => {
    const repoUrl = `https://github.com/${username}/${repo}`;
    const url = 'https://pushmore.io/webhook/d3Gm4aEPCuhAUjfbECLLdW41';

    const bodyParams = {
        repoUrl: repoUrl,
        sender: 'Michele Vettone',
    };

    try {
        let response = await axios(url, {
            method: 'POST',
            data: bodyParams,
        });
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (e: any) {
        console.log('Error: sendMessage', e.response.data);
        return false;
    }
};
