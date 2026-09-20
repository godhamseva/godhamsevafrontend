export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h3>Join our donors already caring for 850+ mother cows.</h3>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you — replace this with your real newsletter/donation flow.');
          }}
        >
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Get Updates</button>
        </form>
      </div>
    </section>
  );
}
