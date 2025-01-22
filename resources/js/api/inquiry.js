import {URL} from './configuration'


export const inquiry_store = async (body) => {
    const f = await fetch(`${URL}/inquiries`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await f.json()
}