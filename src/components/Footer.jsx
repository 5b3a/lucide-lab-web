import {
  Box,
  Flex,
  Grid,
  Section,
  Text,
  Link as RLink,
  Separator,
} from "@radix-ui/themes";

import {
  FlaskConical,
  Github,
  Twitter,
  Heart,
  Tangent,
  FlaskRound,

} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  const size = 20;
  return (
    <Section className="bg-white/5 rounded-sm p-6">
      <Grid rows={"2"} gap={"3"}>
        {/* lucide-labs-logo */}
        <Link to={"/"} className=" w-fit  justify-self-center self-center">
          <Flex
            gap="2"
            justify={"center"}
            align={"center"}
            className="hover:text-[var(--red-10)] def-tr-clr"
          >
            <FlaskConical size={size} className=" -rotate-12" strokeWidth={2} />
            <Text size={"6"} className="font-mono uppercase pt-1">
              lucide-labs
            </Text>
          </Flex>
        </Link>

        {/* //lucide links */}
        <Box className="flex flex-wrap gap-6 justify-center items-center">
          {/* lucide-icon link */}
          <RLink
            href="https://lucide.dev/"
            target="_blank"
            className="def-tr-clr hover:text-[var(--red-10)] text-white hover:no-underline tracking-wider flex gap-2 capitalize items-center justify-center font-sans font-medium"
          >
            <img src="https://lucide.dev/logo.dark.svg" alt="" />
            <Text className=" tracking-wider" size={"4"}>
              Lucide icons official
            </Text>
          </RLink>
          {/* lucide studio link */}
          <Separator orientation={"vertical"} decorative/>
          <RLink
            href="https://lucide-studio.vercel.app/edit"
            target="_blank"
            className="def-tr-clr hover:text-[var(--red-10)] text-white hover:no-underline  cursor-pointer tracking-wider flex gap-2 capitalize items-center justify-center font-sans font-medium"
          >
            <Tangent size={size} />
            <Text className=" tracking-wider" size={"4"}>
              Lucide Studio
            </Text>
          </RLink>
          <Separator orientation={"vertical"}/>
          <RLink
            href="https://github.com/lucide-icons/lucide-lab"
            target="_blank"
            className="def-tr-clr hover:text-[var(--red-10)] text-white hover:no-underline  cursor-pointer tracking-wider flex gap-2 capitalize items-center justify-center font-sans font-medium"
          >
            <FlaskRound size={size - 2} />
            <Text className=" tracking-wider" size={"4"}>
              Lucide Lab GitHub
            </Text>
          </RLink>
        </Box>

        {/* socials-links */}
        <Separator orientation={"horizontal"} className="w-full"/>
        <Box className="flex flex-wrap gap-6 py-2 justify-self-center hover:text-[var(--red-10)] justify-center items-center p-2 ">
          <RLink href="https://x.com/x_5b3a" target="_blank">
            <Twitter
              className=" justify-self-end hover:text-[var(--red-10)] text-white def-tr-clr"
              strokeWidth={2.2}
              size={size}
            />
          </RLink>
          <Separator orientation={"vertical"}/>
          <RLink href="https://github.com/5b3a" target="_blank">
            <Github
              className=" justify-self-end hover:text-[var(--red-10)] text-white def-tr-clr"
              strokeWidth={2.2}
              size={size}
            />
          </RLink>
        </Box>

        {/* author */}
        <Text
          size={"4"}
          weight={"light"}
          className="font-mono uppercase justify-self-center flex gap-3 items-center cursor-default tracking-widest"
        >
          made with{" "}
          <Heart size={size - 1} fill="var(--red-9)" stroke="none" /> by{" "}
          <RLink
            href="#"
            className=" hover:no-underline text-[var(--red-10)] hover:text-[var(--gray-12)] def-tr-clr"
          >
            {" "}
            5b3a
          </RLink>
        </Text>
      </Grid>
    </Section>
  );
};

export default Footer;
