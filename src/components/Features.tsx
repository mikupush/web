import { useTranslation } from "@/hooks/i18n";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import lockIcon from "@/assets/Icons/lockIcon.svg?url";
import starIcon from "@/assets/Icons/starIcon.svg?url";
import featherIcon from "@/assets/Icons/featherIcon.svg?url";

export default function Features() {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="mb-7 text-2xl md:text-3xl font-extrabold text-center">
                {t('features_title')}
            </h2>

            <div className="flex justify-center">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="flex flex-col items-center text-center space-y-3">
                            <img src={lockIcon} alt="Privacy Icon" className="w-20 h-20" />
                            <CardTitle className="text-on-background text-lg font-semibold">
                                {t('privacy_first')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-on-background/80 leading-relaxed">
                                {t('privacy_copy')}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="flex flex-col items-center text-center space-y-3">
                            <img src={starIcon} alt="Star Icon" className="w-20 h-20" />
                            <CardTitle className="text-on-background text-lg font-semibold">
                                {t('simple_by_design')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-on-background/80 leading-relaxed">
                                {t('simple_copy')}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="flex flex-col items-center text-center space-y-3">
                            <img src={featherIcon} alt="Feather Icon" className="w-20 h-20" />
                            <CardTitle className="text-on-background text-lg font-semibold">
                                {t('lightweight')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-on-background/80 leading-relaxed">
                                {t('lightweight_copy')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}