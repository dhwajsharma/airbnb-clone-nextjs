const Footer = () => {
    return (
        <div className="dark:bg-[#232626]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="dark:text-white space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="dark:text-white space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Frontline Stays</p>
                <p>Airbnb.org</p>
                <p>Guest Referrals</p>
            </div>

            <div className="dark:text-white space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Resource Centre</p>
                <p>Community Centre</p>
                <p>Responsible hosting</p>
            </div>

            <div className="dark:text-white space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighbourhood Support</p>
                <p>Trust & Safety</p>
            </div>

        </div>
    )
}

export default Footer
