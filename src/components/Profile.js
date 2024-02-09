import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Link, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FiLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import OtroCielo from '../assets/oc.JPG';
import VcScreen from '../assets/vcscreen.JPG';
import BookCorner from '../assets/bookcorner.JPG';
import Rgb from '../assets/rgbgame.JPG';
import Portfolio from '../assets/portfolio2.JPG';
import Ig from '../assets/igscreenshot.JPG';
import Almacen from '../assets/almacen1.JPG';
import blogapp from '../assets/blogapp.JPG';

export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:1200px)');
  return (
    <Flex direction={isNotSmallerScreen ? 'row' : 'column'}>
      <Box alignSelf="center" px="4" py="1" margin={'auto'}>
        <Heading
          fontWeight="bold"
          fontFamily="Rajdhani, sans-serif"
          color="gray.400"
          size="2xl"
          textAlign="center"
          p={isNotSmallerScreen ? '2' : '0'}
          mb="8"
        >
          My projects:
        </Heading>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          justifyContent="center"
          justifyItems="center"
          margin={'auto'}
          flexWrap="wrap"
        >
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
            <Image src={VcScreen} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://vc-beauty-ba-git-main-danmartinez01.vercel.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  VC Beauty
                </Link>
                <br />
                <Text>React-NextJs-Css</Text>
                <Link
                  href="https://vc-beauty-ba-git-main-danmartinez01.vercel.app/"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://vc-beauty-ba-git-main-danmartinez01.vercel.app/"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={blogapp} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://myblogapp-amber.vercel.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                  mb="2"
                  py="2"
                >
                  Blog App
                </Link>
                <br />
                <Text>NextJs-PostgreSQL-TailwindCss</Text>
                <Link href="https://myblogapp-amber.vercel.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/myblogapp"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={OtroCielo} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://otrocielostore.netlify.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  Jewelry Store
                </Link>
                <br />
                <Text>React-Firebase</Text>
                <Link href="https://otrocielostore.netlify.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/otrocielo-ecommerce"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={BookCorner} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://theenglishcorner.vercel.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  The English Corner
                </Link>
                <br />
                <Text>React-Typescript-ChakraUI</Text>
                <Link href="https://theenglishcorner.vercel.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/MiniLibrary-with-Next.Js"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={Rgb} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://guessthecolorrgb.netlify.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  Rgb Guessing Game
                </Link>
                <br />
                <Text>HTML-CSS-JS</Text>
                <Link href="https://guessthecolorrgb.netlify.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/colorGameJS"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={Portfolio} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://danielamartinez.netlify.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  My portfolio
                </Link>
                <br />
                <Text>React-ChakraUI</Text>
                <Link href="https://danielamartinez.netlify.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/Portfolio-with-Chakra-UI"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={Ig} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://ig-post-clone.netlify.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  Ig clone Vanilla Js
                </Link>
                <br />
                <Text>HTML-CSS-JS</Text>
                <Link href="https://ig-post-clone.netlify.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/Instagram-Post-Clone"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
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
            <Image src={Almacen} width="250px" height="130px" />
            <Stack align="baseline" alignItems="center">
              <Box textAlign="center" p="1" align="baseline">
                <Link
                  href="https://elalmacenjs.netlify.app/"
                  isExternal
                  color="white"
                  fontSize="xl"
                  fontWeight="semibold"
                  textDecoration="none"
                >
                  El almacenJs
                </Link>
                <br />
                <Text>HTML-CSS-JS</Text>
                <Link href="https://elalmacenjs.netlify.app/" isExternal>
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FiLink />}
                  />
                </Link>
                <Link
                  href="https://github.com/DanMartinez01/El-almacen"
                  isExternal
                >
                  <IconButton
                    bgColor="inherit"
                    aria-label="Link"
                    size="lg"
                    icon={<FaGithub />}
                  />
                </Link>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Profile;
