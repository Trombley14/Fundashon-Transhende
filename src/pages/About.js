import React from "react";
import "../styles/about.css";
import Navbar from "../components/Navbar";

/**
 * Props (all optional):
 * heroImage: string                // main banner image URL
 * humanImage: string               // supporting image in the “Human Photo” section
 */
export default function About({ heroImage, humanImage }) {
  return (
    <>
      <Navbar />
      <div className="about">
        {/* 1) Hero Banner */}
        <section
          className="about__hero"
          style={{
            backgroundImage: `linear-gradient(rgba(13,93,184,.55), rgba(13,93,184,.35)), url('${
              heroImage || ""
            }')`,
          }}
          role="img"
          aria-label="Fundashon Transhende providing accessible transportation services"
        >
          <div className="about__hero-content">
            <h1>Welcome to Fundashon Transhende</h1>
            <p className="about__tagline">
              Together we make a difference since 2002
            </p>
          </div>
        </section>

        <div className="about__container">
          {/* 2) Impact Highlights */}
          <section className="about__highlights">
            <article className="hl">
              <div className="hl__icon" aria-hidden>
                🚐
              </div>
              <h3>20+ Years</h3>
              <p>Serving Curaçao with dignity and care.</p>
            </article>
            <article className="hl">
              <div className="hl__icon" aria-hidden>
                👥
              </div>
              <h3>Thousands Helped</h3>
              <p>Reliable transport for those who need it most.</p>
            </article>
            <article className="hl">
              <div className="hl__icon" aria-hidden>
                🧑‍⚕️
              </div>
              <h3>Professional Team</h3>
              <p>Compassionate, trained, and mission-driven.</p>
            </article>
            <article className="hl">
              <div className="hl__icon" aria-hidden>
                🏥
              </div>
              <h3>Healthcare Partners</h3>
              <p>Strong ties with medical institutions.</p>
            </article>
          </section>

          {/* 3) Vision / Mission / Values */}
          <section className="about__principles">
            <header className="section-hdr">
              <h2>Our Guiding Principles</h2>
              <p className="muted">What drives our service every day.</p>
            </header>
            <div className="cards3">
              <article className="card">
                <h3 className="card__title">Vision</h3>
                <p>
                  <strong>Mobility, Independence & Social Connection.</strong>{" "}
                  We empower people to access healthcare and community life with
                  dignity.
                </p>
              </article>
              <article className="card">
                <h3 className="card__title">Mission</h3>
                <p>
                  <strong>More than transport.</strong> We are a lifeline—safe,
                  reliable, and caring support for every journey.
                </p>
              </article>
              <article className="card">
                <h3 className="card__title">Values</h3>
                <ul className="list">
                  <li>
                    <strong>Commitment</strong> to quality and responsibility
                  </li>
                  <li>
                    <strong>Compassion</strong> for every person we serve
                  </li>
                  <li>
                    <strong>Dignity</strong> in every interaction
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* 4) Human Photo Section */}
          <section className="about__human">
            <div
              className="human__img"
              style={{ backgroundImage: `url('${humanImage || ""}')` }}
            />
            <div className="human__text">
              <h2>People First</h2>
              <p>
                Our team is dedicated to providing{" "}
                <strong>safe, reliable, and compassionate</strong> transport
                every day—so clients can reach hospitals, therapy, work, and
                social activities.
              </p>
            </div>
          </section>

          {/* 5) Testimonial (optional) */}
          <section className="about__quote">
            <blockquote>
              “Without Fundashon Transhende, my mother wouldn’t be able to
              attend her medical appointments. They are a lifeline.”
            </blockquote>
            <div className="about__quote-author">
              — A grateful family member
            </div>
          </section>

          {/* 6) Closing CTA */}
          <section className="about__cta">
            <h2>Every Role Matters</h2>
            <p className="muted">
              Together, we’re building mobility and dignity for our community.
            </p>
            <div className="cta__buttons">
              <a className="btn btn--primary" href="/team">
                Meet the Team
              </a>
              <a className="btn btn--outline" href="/report">
                See Our Work
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
