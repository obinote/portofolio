import { createTranslation } from "@/i18n/server";
import { LocaleTypes } from "@/i18n/settings";

export default async function Home({
  params: { locale = "en" },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "home");

  return (
    <div>
      <h1 className="text-primary">
        {t("greeting")} : {locale}
      </h1>
    </div>
  );
}
