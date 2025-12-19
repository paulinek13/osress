<script>
	import AdminLink from '../common/AdminLink.svelte';
	import EmailAddress from '../common/EmailAddress.svelte';
	import FooterSection from '../common/FooterSection.svelte';
</script>

<footer class="bg-black text-neutral-300 px-4 py-8 md:px-8 md:py-16 flex flex-col gap-4">
	<div class="flex flex-row flex-wrap gap-4 md:gap-8 max-w-4xl self-center">
		<FooterSection title="Website Administration">
			This website is maintained and administered by <AdminLink />
		</FooterSection>
		<FooterSection title="Contact Us">
			Have suggestions, issues, or feedback? We'd love to hear from you! <br />
			Just send an email to: <EmailAddress />
		</FooterSection>
		<FooterSection title="Media & Content Rights">
			Unless otherwise noted, media content (photographs, videos, graphics) and other creative works
			on this website are provided by OSRESS participants and partner universities. These materials
			are used with permission and are protected by copyright laws.
		</FooterSection>
	</div>
	<br />
	<div class="border-t border-neutral-900 text-xs text-center p-4">
		© 2010-2025 OSRESS. All rights reserved.
	</div>
</footer>
