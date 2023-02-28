export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://dianananda.vercel.app/images/dion.jpg'
}) {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName);
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle)
    : undefined;
  const ogDesc = encodeURIComponent(description);

  return `https://og-dion.vercel.app/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}
