import React from 'react';
import { Text, Flex, Heading, Box, Stack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaReact, FaGitSquare } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isNotSmallerScreen] = useMediaQuery('(min-width:1200px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      justifyContent="center"
      justifyItems="center"
      margin="auto"
      flexWrap="wrap"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Box alignSelf="center" margin="auto" px="2" py="2">
        <Heading
          fontWeight="bold"
          fontFamily="Rajdhani, sans-serif"
          color="gray.400"
          size="2xl"
          textAlign="center"
          p={isNotSmallerScreen ? '1' : '0'}
        >
          Tech stack:
        </Heading>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          my="2"
          py="2"
          px="4"
          textAlign="center"
          justifyContent="center"
          flexWrap="wrap"
          margin="auto"
        >
          <Box
            w="250px"
            rounded="12px"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="2xl"
                textAlign="center"
              >
                React
              </Text>
              <FaReact color="white" size="30px" />
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="2xl"
                textAlign="center"
              >
                JavaScript
              </Text>
              <IoLogoJavascript color="white" size="30px" />
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                Chakra UI
              </Text>
              <Icon viewBox="0 0 24 24" color="white" boxSize="28px">
                <path
                  fill="currentColor"
                  d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"
                />
              </Icon>
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                NextJs
              </Text>
              {/* <SiChakraui /> */}
              <Icon viewBox="0 0 24 24" color="white" boxSize="28px">
                <path
                  fill="currentColor"
                  d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"
                />
              </Icon>
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                Typescript
              </Text>
              <SiTypescript color="white" size="24px" />
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                TailwindCss
              </Text>
              <SiTailwindcss size="30" />
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                React Native
              </Text>
              <TbBrandReactNative size="30" />
            </Stack>
          </Box>
          <Box
            w="250px"
            rounded="12px"
            overflow="hidden"
            bg="gray.700"
            m="8px"
            _hover={{
              bg: 'gray.600',
              mt: '2px',
            }}
          >
            <Stack align="baseline" alignItems="center" p="16px">
              <Text
                fontWeight="semibold"
                color="white"
                size="3xl"
                textAlign="center"
              >
                Git
              </Text>
              <FaGitSquare size="30" />
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TechStack;
