---
layout: layouts/base.njk
title: Contact Us
description: Reach the Deater Foundation team for assistance, partnerships, or media inquiries.
permalink: /contact/
---
<section class="bg-white">
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div class="prose prose-lg max-w-none">
        <h1>Contact us</h1>
        <p>We’re here to support families, partners, and donors. Complete the form and a member of our team will follow up within two business days.</p>
        <h2>Reach us directly</h2>
        <ul>
          <li>Email: <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></li>
          <li>Phone: <a href="tel:{{ site.contact.phone | replace(' ', '') }}">{{ site.contact.phone }}</a></li>
          <li>Mailing address: {{ site.contact.address }}</li>
        </ul>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-card">
        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-slate-700" for="name">Name</label>
              <input class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500" type="text" name="name" id="name" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700" for="email">Email</label>
              <input class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500" type="email" name="email" id="email" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700" for="organization">Organization (optional)</label>
              <input class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500" type="text" name="organization" id="organization" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700" for="topic">How can we help?</label>
              <select class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500" name="topic" id="topic" required>
                <option value="">Select an option</option>
                <option value="family-assistance">I need assistance for my family</option>
                <option value="partner">I’d like to partner</option>
                <option value="volunteer">I’d like to volunteer</option>
                <option value="press">Press or media inquiry</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700" for="message">Message</label>
              <textarea class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500" name="message" id="message" rows="5" required></textarea>
            </div>
            <button class="btn-primary w-full justify-center" type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
