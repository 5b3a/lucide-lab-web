import {
  Flex,
  Text,
  Box,
  Callout,
  Code,
  Link as RLink,
  Grid,
} from "@radix-ui/themes";
import { Twitter, Github, FlaskConical, AlertTriangle } from "lucide-react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex gap="2" direction={"column"} className="p-3" align={"center"}>
      {/* main navbar */}
      <Grid
        flow={{ sm: "column", initial: "row" }}
        justify={{ initial: "start", sm: "center" }}
        align={{ initial: "start", sm: "center" }}
        className="w-full rounded-md bg-white/5 text-white px-6 py-2"
      >
        <Link
          to={"/"}
          className=" w-fit  justify-self-center md:justify-self-start"
        >
          <Flex
            gap="2"
            justify={"center"}
            align={"center"}
            className="hover:text-[var(--red-10)] def-tr-clr"
          >
            <FlaskConical size={30} className=" -rotate-12" strokeWidth={2.5} />
            <Text
              size={"8"}
              weight={"bold"}
              className="font-mono uppercase pt-2"
            >
              lucide-labs
            </Text>
          </Flex>
        </Link>

        {/* socials */}
        <Box className="flex flex-wrap gap-2 md:gap-6 py-2 md:py-0  justify-self-center hover:text-[var(--red-10)] ">
          <RLink href="https://x.com/x_5b3a" target="_blank">
            <Twitter
              className=" justify-self-end hover:text-[var(--red-10)] text-white def-tr-clr"
              strokeWidth={2.2}
              size={28}
            />
          </RLink>
          <RLink href="https://github.com/5b3a" target="_blank">
            <Github
              className=" justify-self-end hover:text-[var(--red-10)] text-white def-tr-clr"
              strokeWidth={2.2}
              size={28}
            />
          </RLink>
        </Box>
      </Grid>

      {/* {tooltip mesg} */}
      <Box className=" capitalize px-8 mt-2">
        <Callout.Root color="red" variant="surface" className=" p-3">
          <Callout.Icon>
            <AlertTriangle strokeWidth={1.5} />
          </Callout.Icon>
          <Callout.Text size="4">
            This website is not affiliated with{" "}
            <RLink href="https://lucide.dev/">
              <Code size="4">lucide-icons</Code>
            </RLink>
          </Callout.Text>
        </Callout.Root>
      </Box>

    </Flex>
  );
}

export default Header;
