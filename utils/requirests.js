const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// http://localhost:3000/api/properties/6680583effbf3b8313d012f6
// fetch properties 
async function fetchProperties() {
    try {

        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`,{ cache: 'force-cache' })
        if (!res.ok) {
            throw new Error(`An error has occured: ${res.statusText}`)
        }
        return res.json()

    } catch (error) {
        console.log(error);
        return [];
    }
}

// fetch single property 
async function fetchProperty(id) {
    try {

        if (!apiDomain) {
            return null;
        }

        const res = await fetch(`${apiDomain}/properties/${id}`,{ cache: 'force-cache' })
        if (!res.ok) {
            throw new Error(`An error has occured: ${res.statusText}`)
        }
        return res.json()

    } catch (error) {
        console.log(error);
        return null;
    }
}

export { fetchProperties,fetchProperty };