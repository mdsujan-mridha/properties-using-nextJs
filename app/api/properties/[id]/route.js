import connectDB from "@/config/dbConnection";
import Property from "@/models/Property";


export const GET = async (request, { params }) => {
    try {
        await connectDB()
        const property = await Property.findById(params.id);
        if (!property) {
            return new Response(`Property not found with this ${params.id}`, { status: 404 });
        }
        return new Response(JSON.stringify(property), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response('Something Went wrong', { status: 500 });
    }
}
