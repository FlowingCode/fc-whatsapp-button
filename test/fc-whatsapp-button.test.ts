import { html, fixture, expect } from '@open-wc/testing';
import '../src/fc-whatsapp-button.js';

describe('FcWhatsappButton', () => {
  it('has a default message text', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
        label="Let's Talk"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('text')).to.equal('Hi!');
  });

  it('has a default label "Let\'s chat"', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('label')).to.equal(`Let's chat`);
  });

  it('can override the default label', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="hey there lets chat!"
        label="Contact me"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('label')).to.equal('Contact me');
  });

  it('correctly resolves the whatsapp link with default message', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('link')).to.equal(
      'https://api.whatsapp.com/send?phone=447712345678&text=hey%20there%20lets%20chat!'
    );
    expect(el.getAttribute('appLink')).to.equal(
      'whatsapp://send/?phone=447712345678&text=hey%20there%20lets%20chat!'
    );
  });

  it('correctly resolves the whatsapp link with custom message', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="yo"
        label="Let's Talk"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('link')).to.equal(
      'https://api.whatsapp.com/send?phone=447712345678&text=yo'
    );
    expect(el.getAttribute('appLink')).to.equal(
      'whatsapp://send/?phone=447712345678&text=yo'
    );
  });

  it('correctly resolves the whatsapp link for a group invite', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        invitecode="INVITECODE"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></fc-whatsapp-button>`
    );
    expect(el.getAttribute('appLink')).to.equal(
      'whatsapp://chat/?code=INVITECODE'
    );
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<fc-whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></fc-whatsapp-button>`
    );
    expect(el).shadowDom.to.be.accessible();
  });
});
