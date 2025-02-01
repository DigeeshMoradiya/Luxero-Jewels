const PersonalData = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 font-gtAmerica">Personal Data</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">

                <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1 font-gtAmerica">Full Name</h3>
                    <p className="text-base font-semibold text-black font-gtAmerica">Harsh Hingu</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-500 font-gtAmerica mb-1">Email</h3>
                    <p className="text-base font-semibold text-black font-gtAmerica">Harshdummy12@gmail.com</p>
                </div>

            </div>
        </div>
    );
};

export default PersonalData;
