const Banner = () => {
    return (
        <div>
            <div className="bg-[url('assets/banner.png')] bg-cover opacity-10 h-[70vh] relative">
        </div>
            <div className="container mx-auto absolute bottom-16 md:bottom-12 lg:bottom-96 lg:left-36">
                <h2 className="font-medium text-2xl lg:text-5xl text-black text-center">I Grow By Helping People In Need</h2>
                <div className="flex items-center mt-2 lg:mt-10 justify-center">
                    <input className="text-black pl-2 lg:p-4 lg:w-4/12 border rounded-l-lg border-gray-500 h-8 lg:h-14" type="text" name="" id="" placeholder="Search Here..." />
                    <button className="font-semibold text-white lg:text-lg bg-[#FF444A] px-2 lg:px-6 lg:py-4 rounded-r-lg h-8 lg:h-14">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;