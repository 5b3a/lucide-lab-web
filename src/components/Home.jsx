import * as lucideLabs from "@lucide/lab";
import {
  Section,
  Flex,
  Grid,
  Box,
  Separator,
  Slider,
  Checkbox,
} from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";

import { Icon, Search } from "lucide-react";

import { nanoid } from "nanoid";

import { Link } from "react-router-dom";

import { useState, useMemo } from "react";

function Home() {
  const allIcons = Object.keys(lucideLabs);
  const [iconArray, setIconArray] = useState(Object.keys(lucideLabs));
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(36);
  const [color, setColor] = useState("currentColor");
  const [abswidth, setAbswidth] = useState(false);
  const handleSearch = useMemo(
    () => (e) => {
      const newArr = iconArray.filter((item) => item.includes(e.target.value));
      e.target.value.length > 0 ? setIconArray(newArr) : setIconArray(allIcons);
    },
    [iconArray, allIcons]
  );
  return (
    <Section className=" p-3 m-3 rounded-sm flex flex-col flex-wrap justify-center items-center gap-4">
      {/* upper section searchbox and icons */}
      <Flex dir="row" gap={"3"}>
        {/* search box */}
        <Box className="flex flex-row gap-2 bg-[var(--red-a2)] rounded-md">
          {/* input searchox */}
          <input
            placeholder="search icons..."
            className="p-2 bg-transparent italic font-mono"
            onChange={handleSearch}
          />
          {/* search icon */}
          <Search className="m-auto mx-auto mr-2" size={25} />
        </Box>
        {/* icons count */}
        <Box className="font-mono bg-[var(--white-a2)] p-2 rounded-md gap-2">
          <Label.Root>Showing icons : {iconArray.length}</Label.Root>
        </Box>
      </Flex>
      {/* seprator */}
      <Separator orientation={"horizontal"} className="w-[90%]" />

      <Flex justify={"center"} align={"center"} gap={"3"} wrap={"wrap"}>
        {/* stroke width */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Stroke Width</Label.Root>
          <Slider
            radius="full"
            size={"2"}
            className="w-[200px]"
            step={0.2}
            defaultValue={[strokeWidth]}
            max={3}
            min={1}
            onValueChange={useMemo(
              () => (e) => {
                setStrokeWidth(e);
              },
              [setStrokeWidth]
            )}
          />
          <Label.Root>{strokeWidth}</Label.Root>
        </Box>

        {/* //size Slider */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Size</Label.Root>
          <Slider
            radius="full"
            size={"2"}
            className="w-[200px]"
            step={1}
            defaultValue={[size]}
            max={48}
            min={12}
            onValueChange={useMemo(
              () => (e) => {
                setSize(e);
              },
              [setSize]
            )}
          />
          <Label.Root>{size}</Label.Root>
        </Box>
        {/* color selector */}
        <Box className=" bg-[var(--red-a2)] p-2 flex flex-wrap rounded-md justify-center items-center gap-2">
          <Label.Root>Color</Label.Root>
          <input
            type="color"
            name=""
            id=""
            value={color}
            onChange={useMemo(
              () => (e) => {
                setColor(e.target.value);
              },
              [setColor]
            )}
          />
        </Box>
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
      </Flex>
      {/* seperaator */}
      <Separator orientation={"horizontal"} className="w-[90%]" />

      {/* main grid */}
      <Grid columns={{ initial: "5", lg: "12" }} gap="4" className="mt-6">
        {iconArray.map((item) => {
          return (
            <Link
              to={`icons/${item}`}
              key={nanoid()}
              className="flex items-center justify-center p-4 border border-[var(--red-)] bg-[var(--red-a2)] rounded-md flex-col gap-2 text-[var(--red-11)] hover:bg-[var(--red-a5)] def-tr-clr"
              title={item.toLowerCase()}
            >
              {
                <Box
                  height={"60px"}
                  width={"100px"}
                  className="flex justify-center items-center"
                >
                  <Icon
                    size={size}
                    strokeWidth={strokeWidth}
                    iconNode={lucideLabs[item]}
                    stroke={color === "currentColor" ? "hsl(0,0%,80%)" : color}
                    absoluteStrokeWidth={abswidth}
                  />
                </Box>
              }
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Home;
