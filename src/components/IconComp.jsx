/* eslint-disable react/prop-types */
import {
  Section,
  Text,
  Flex,
  Box,
  Button,
  Tabs,
  Slider,
  Checkbox,
  Code,
} from "@radix-ui/themes";

import * as labIcons from "@lucide/lab";
import { Icon } from "lucide-react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import * as Label from "@radix-ui/react-label";
import instrucData from "../lib/instructionData.js";
import { useCallback } from "react";
import { toPng } from "html-to-image";

function IconComp() {
  let { iconId } = useParams();
  iconId === undefined ? (window.location.href = "/icons/burger") : iconId;

  const iconSvg = useRef();

  const tableData = instrucData(iconId);
  const tableName = Object.keys(tableData);
  const tableContent = Object.values(tableData);

  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(150);
  const [strokeColor, setStrokeColor] = useState("currentColor");
  const [fillColor, setFillColor] = useState("none");
  const [abswidth, setAbswidth] = useState(false);

  const handleSvgBtn = (e) => {
    let timeOut;
    if (timeOut) clearTimeout(timeOut);

    window.navigator.clipboard.writeText(iconSvg.current.outerHTML);
    const oT = e.target.innerText;
    e.target.innerText = "copied";

    timeOut = setTimeout(() => {
      e.target.innerText = oT;
    }, 2000);
  };

  const handleJSXBtn = (e) => {
    let timeOut;
    if (timeOut) clearTimeout(timeOut);

    window.navigator.clipboard.writeText(
      `<Icon iconNode={${iconId}} size={${size}} strokeWidth={${strokeWidth}} strokeColor={"${strokeColor}"} fill={"${fillColor}"} absoluteStrokeWidth={${abswidth}}  />`
    );
    const oT = e.target.innerText;
    e.target.innerText = "copied";

    timeOut = setTimeout(() => {
      e.target.innerText = oT;
    }, 2000);
  };

  const handleDownload = useCallback(() => {
    toPng(iconSvg.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${iconId}-lucide-lab.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [iconSvg, iconId]);

  return (
    <Section minHeight={"50svh"} className="py-0 px-4">
      <Flex gap={"4"} className="w-full p-4" direction={"column"}>
        {/* title */}
        <Text
          size={"4"}
          className="bg-[var(--red-8)] p-2 mx-4 rounded-md flex flex-wrap justify-center items-center font-mono text-base md:text-4xl lg:font-semibold tracking-wider"
        >
          {iconId}
        </Text>
        <Flex
          gap={"4"}
          className=" w-full p-4 rounded-md"
          align={"center"}
          direction={{ initial: "column", md: "row" }}
        >
          <Box className="bg-[var(--white-a1)] w-full  aspect-square p-4 rounded-md sm:w-1/3 flex flex-wrap justify-center items-center">
            {/* icon */}
            <Icon
              ref={iconSvg}
              size={size}
              strokeWidth={strokeWidth}
              fill={fillColor}
              stroke={strokeColor}
              iconNode={labIcons[iconId]}
              absoluteStrokeWidth={abswidth}
            />
          </Box>
          {/* //buttons */}
          <Flex
            gap={"4"}
            direction={{ sm: "column" }}
            className="w-2/3"
            justify={"center"}
            align={"center"}
          >
            <Button
              size={"4"}
              variant="soft"
              className="w-1/2 md:w-2/3  h-16"
              onClick={handleJSXBtn}
            >
              Copy JSX
            </Button>
            <Button
              variant="soft"
              className="w-1/2 md:w-2/3  h-16"
              size={"4"}
              onClick={handleSvgBtn}
            >
              Copy SVG
            </Button>
            <Button
              variant="soft"
              className="w-1/2 md:w-2/3  h-16"
              size={"4"}
              onClick={handleDownload}
            >
              Download SVG
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* inputs */}

      <Flex justify={"center"} align={"center"} gap={"3"} wrap={"wrap"}>
        {/* use abs width checkbox */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2 capitalize">
          <Label.Root>use absolute width</Label.Root>
          <Checkbox
            size={"3"}
            variant="surface"
            value={abswidth}
            onClick={() => {
              setAbswidth((prev) => !prev);
              setStrokeWidth(2);
            }}
          />
        </Box>
        {/* stroke width */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Stroke Width</Label.Root>
          <Slider
            radius="full"
            size={"2"}
            className="w-[200px]"
            step={0.2}
            defaultValue={[strokeWidth]}
            max={abswidth ? 24 : 3}
            min={1}
            onValueChange={(e) => {
              setStrokeWidth(e);
            }}
          />
          <Label.Root>{strokeWidth}</Label.Root>
        </Box>

        {/* size Slider */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Size</Label.Root>
          <Slider
            radius="full"
            size={"2"}
            className="w-[200px]"
            step={1}
            defaultValue={[size]}
            max={200}
            min={50}
            onValueChange={(e) => {
              setSize(e);
            }}
          />
          <Label.Root>{size}</Label.Root>
        </Box>

        {/* color selector */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Stroke Color</Label.Root>
          <input
            type="color"
            name=""
            id=""
            value={strokeColor}
            onChange={(e) => {
              setStrokeColor(e.target.value);
            }}
          />
        </Box>

        {/* color selector */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Fill color</Label.Root>
          <input
            type="color"
            name=""
            id=""
            value={fillColor}
            onChange={(e) => {
              setFillColor(e.target.value);
            }}
          />
        </Box>
      </Flex>

      <Section className="p-8">
        <Text className=" font-sans" size={"6"}>
          Install <Code>lucide-lab</Code>
        </Text>
        <Tabs.Root defaultValue="pnpm">
          <Tabs.List>
            <Tabs.Trigger value="pnpm"> pnpm </Tabs.Trigger>
            <Tabs.Trigger value="npm"> npm </Tabs.Trigger>
            <Tabs.Trigger value="yarn"> yarn </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="pnpm">
            <Box className="w-full mt-3 flex items-center min-h-12 border border-[var(--red-a4)] p-4 bg-[var(--red-a2)] font-mono">
              <Text size={"3"}>pnpm install @lucide/lab</Text>
            </Box>
          </Tabs.Content>

          <Tabs.Content value="npm">
            <Box className="w-full mt-3 flex items-center min-h-12 border border-[var(--red-a4)] p-4 bg-[var(--red-a2)] font-mono">
              <Text size={"3"}>npm install @lucide/lab</Text>
            </Box>
          </Tabs.Content>

          <Tabs.Content value="yarn">
            <Box className="w-full mt-3 flex items-center min-h-12 border border-[var(--red-a4)] p-4 bg-[var(--red-a2)] font-mono">
              <Text size={"3"}>yarn add @lucide/lab</Text>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Section>
      {/* tab */}
      <Tabs.Root defaultValue={tableName[0]} className=" min-h-[25svh] p-8">
        <Tabs.List>
          {tableName.map((item) => {
            return (
              <Tabs.Trigger key={nanoid()} value={item.toLowerCase()}>
                {capitalize(item)}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        <Box
          lang="jsx"
          pt="3"
          className=" rounded-lg p-4 text-white mt-4 font-mono w-full  flex items-center min-h-12 border border-[var(--red-a4)] bg-[var(--red-a2)] overflow-x-scroll"
        >
          {tableContent.map((data, index) => {
            return (
              <Tabs.Content
                key={nanoid()}
                value={tableName[index]}
                className=" relative"
              >
                <Box size={"2"}>{data}</Box>
              </Tabs.Content>
            );
          })}
        </Box>
      </Tabs.Root>
    </Section>
  );
}

function capitalize(word) {
  let f = word[0].toUpperCase();
  let r = word.substring(1);

  return f + r;
}
export default IconComp;
