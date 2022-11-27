import data from "./data";
import FaqCard from "./FaqCard";
import "./Faq.css";

const Faq = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and
        if you still have some more questions, reach out to me from the contact
        section below
      </p>

      <div className="container faqs__container" data-aos="fade-in">
        {data.map((faq) => (
          <FaqCard key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
