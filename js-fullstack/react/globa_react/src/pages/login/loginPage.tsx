import React from 'react';
// 非常国际范的组件框架
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { useTranslation } from "react-i18next"; //国际化组件就叫i18n 

export const LoginPage = () => {
  const { t,i18n} = useTranslation();
  return (
    <div>
      <Card>
        <CardHeader title={t("login")} />
        <CardContent>
          {t("content")}
        </CardContent>
      </Card>
    </div>
  )
}

