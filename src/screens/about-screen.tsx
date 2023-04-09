import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/alditiya.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
          This is a ToDo app built using react native for Android and iOS devices.
          </Text>
          <LinkButton
            colorScheme={useColorModeValue('pink', 'darkWhite')}
            size="lg"
            borderRadius="full"
            href="https://instagram.com/havnt_named"
            leftIcon={
              <Icon as={Feather} name="instagram" size="sm" opacity={0.5} />
            }
          >
            @alditiya
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/your_futured"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @alditiya
          </LinkButton>
          <Text fontSize="md" w="full">
            Are you looking for a Web Developer or Software QA Tester? Check my LinkedIn Profile!
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/alditiya-yudha-pratama"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            Alditiya Yudha Pratama
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
