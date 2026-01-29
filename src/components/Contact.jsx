import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        setStatus("");

        const formData = new FormData(e.target);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Message sent successfully!");
                e.target.reset();
            } else {
                setStatus("Something went wrong!");
            }
        } catch (error) {
            setStatus("Network error!");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div id='contact'>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-10">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white">Contact Me</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Would love to hear from you.</p>
                <form onSubmit={handleSubmit} class="space-y-8 flex flex-col items-center">
                    <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCESS_KEY}></input>
                    <div class="w-full">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name='email' class="shadow-sm bg-gray-50/10 border border-gray-300/20 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
                    </div>
                    <div class="w-full">
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name='subject' class="block p-3 w-full text-sm text-gray-300 bg-gray-50/10 rounded-lg border border-gray-300/20 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                    </div>
                    <div class="w-full sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Your message</label>
                        <textarea id="message" name='message' rows="6" class="block p-2.5 w-full text-sm text-gray-300 bg-gray-50/10 rounded-lg shadow-sm border border-gray-300/20 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" disabled={loading} class="w-40 py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit border border-amber-50/10 bg-gray-700/50 hover:bg-gray-700">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {status && <p>{status}</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact