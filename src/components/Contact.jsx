import React from 'react'

const Contact = () => {
    return (
        <div>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-10">
                {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white">Contact Me</h2> */}
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Would love to hear from you.</p>
                {/* <form action="#" class="space-y-8 flex flex-col items-center">
                    <div class="w-full">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
                    </div>
                    <div class="w-full">
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                    </div>
                    <div class="w-full sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="w-40 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-amber-50 bg-gray-700">Send message</button>
                </form> */}
                <div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                            <span>+91 8768255202</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>
                            <span>Dumdum, Kolkata, India</span>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/918768255202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed right-6 bottom-6 z-50"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 hover:text-green-600 transition" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.697 4.607 2.021 6.563L4 29l7.646-2.021A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.902-.521-5.563-1.521l-.396-.236-4.541 1.204 1.207-4.427-.258-.406C5.521 18.902 5 16.98 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm5.447-7.362c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.67-1.617-.916-2.217-.242-.582-.487-.502-.67-.511l-.57-.011c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.214 3.078.149.198 2.099 3.208 5.088 4.372.712.307 1.267.491 1.701.628.715.228 1.366.196 1.88.119.574-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact