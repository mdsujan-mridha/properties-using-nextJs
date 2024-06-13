const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
    try {

        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`)
        if (!res.ok) {
            throw new Error(`An error has occured: ${res.statusText}`)
        }
        return res.json()

    } catch (error) {
        console.log(error);
        return [];
    }
}

export { fetchProperties };