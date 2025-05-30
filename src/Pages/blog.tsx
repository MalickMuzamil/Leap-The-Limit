'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header';
// import {Footer} from '@/components/Footer'


export default function Blog() {
    return (
        <>

        <Header/>

            <Container className="pb-16 pt-20 text-center lg:pt-32">
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <div className="max-w-2xl p-6 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-bold text-[#ffffff96]">Welcome to the Blog Page</h1>
                        <p className="mt-4 text-[#ffffff96]">
                            This is a dummy blog page created for testing purposes. You can add your
                            content here.
                        </p>
                    </div>
                </div>
            </Container>

            {/* <Footer /> */}

        </>

    );
}