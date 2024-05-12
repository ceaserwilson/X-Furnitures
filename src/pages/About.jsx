const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              X-Furniture
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        X-Furniture, a subsidiary of X-Corps, offers premium furniture to
        elevate your living spaces. Our curated collection blends timeless
        elegance with contemporary style, crafted to meet the highest standards
        of quality and durability. With personalized service and expert advice,
        we're here to help you create a home that reflects your unique style and
        personality. Explore our online showroom and experience the difference
        of X-Furniture today.
      </p>
    </>
  );
};
export default About;
