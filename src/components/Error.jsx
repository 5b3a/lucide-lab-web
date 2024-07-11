import { Section, Code, Text } from "@radix-ui/themes";
import { AlertTriangle } from "lucide-react";

import { useRouteError, } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(new Error(error));
  return (
    <Section className="flex flex-wrap flex-col justify-center items-center gap-4">
        <AlertTriangle size={(document.body.offsetWidth > 600) ? 180 : 90}/>
      <h1 className="text-[clamp(18px,10svw,20vw)] font-semibold tracking-widest">Oops!</h1>
      <Text size={'8'}>Sorry, an unexpected error has occurred.</Text>
      
        <Code size={'7'} className="text-center">{window.location.pathname} <br/> is Not defined</Code>
      
    </Section>
  );
}
