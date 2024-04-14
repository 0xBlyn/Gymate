import Button from "./Button";

function ContactTrainer() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[5%] text-white">
          <h2 className="text-[24px] lg:text-[36px] font-bold">Need a Fitness Trainer?</h2>
          <h3 className="text-[22px] lg:text-[28px] font-bold mb-10 lg:mb-20">
            <span className="text-[#FF0336]">Call:</span> +130-4044888
          </h3>
          <Button color={`!text-primary`} bg={`bg-white`}  text="purchase now" arrowColor={`!text-primary`} cN="contact-trainer-btn" goTo="/contact" />
        </div>
      </section>
    </>
  );
}

export default ContactTrainer;