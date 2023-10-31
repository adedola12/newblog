import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const {slug} = params
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user:true}
        })

        return new NextResponse(JSON.stringify({ post }, { status: 200 }));
    } catch (error) {
        console.error('Error fetching data', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong" }, { status: 500 })
        );
    } finally {
        await prisma.$disconnect();
    }
}



