import { useState } from 'react'
import { brand } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

const initialForm = { name: '', phone: '', email: '', message: '' }

function Contact() {
  useSEO(
    'Contact Us | Medzinity',
    'Please feel welcome to contact our friendly reception staff with any general or services enquiry.'
  )

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Contact Us"
        title="Have Questions? Get in touch!"
        lede="Please feel welcome to contact our friendly reception staff with any general or services enquiry."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            {submitted ? (
              <div className="form-success">
                Thanks — your request has been received. Our team will reach out shortly.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your enquiry..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Get In Touch
                </button>
              </form>
            )}
          </div>

          <Reveal delay={1} className="contact-info-card">
            <h3>Reach Us Directly</h3>
            <div className="contact-row">
              <div className="card-icon"><Icons.IconMail width={20} height={20} /></div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="card-icon"><Icons.IconPhone width={20} height={20} /></div>
              <div>
                <h4>Phone</h4>
                <a href={brand.phoneHref}>{brand.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
