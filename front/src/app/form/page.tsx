

const Form = () => {
    return (
        <div className="h-screen w-screen bg-black ">
            <div className="top-10 left-10">
                <h2 className="">
                    Service Form
                </h2>
            </div>
            <div className="h-full w-full flex justify-center items-center ">
                <div className="justify-center">
                    <h2 className="text-white font-light text-xl">
                        Paso numero 1
                    </h2>
                    <h3 className="text-white font-bold text-3xl">
                        ¿Como Podemos Ayudarte?
                    </h3>
                    <div className="w-full max-w-md mx-auto">
                        <select name="service_type" id="service_type"
                            class="w-full bg-black text-white border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            <option value="" className="font-bold text-gray-600" disabled selected>Selecciona el tipo de servicio</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="landing_page">Landing Page</option>
                            <option value="corporate_website">Sitio Web Corporativo</option>
                            <option value="blog">Blog</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="web_application">Aplicación Web</option>
                            <option value="seo_service">Optimización SEO</option>
                        </select>
                    </div>
                    <div className="mt-12">
                        <button className="bg-white rounded-full px-4 py-2">
                            Siguiente <span className="bg-white font-bold text-xl"> → </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;