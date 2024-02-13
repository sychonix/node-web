import { Modal, Image, Title, Text, Flex } from '@mantine/core';

export function ComingSoonModal({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  return (
    <>
      <Modal opened={opened} onClose={onClose} centered size="xl" withCloseButton={false}>
        <Flex
          //   style={{
          //     display: 'flex',
          //     flexDirection: 'row',
          //     justifyContent: 'space-between',
          //     alignItems: 'center',
          //   }}
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
          align="center"
          pb={'20px'}
        >
          <div>
            <Image radius="md" src="/relaunch.svg" />
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <Title fz={'24px'} pb={'12px'} fw={'bold'}>
              Coming Soon: Unveiling the Next Big Thing!
            </Title>
            <Text fz={'14px'}>
              {' '}
              Exciting news awaits! We're thrilled to announce that a game-changing feature is about
              to launch. Stay tuned for the big reveal as we unveil how this innovation will
              transform your benefit. Sign up now to be the first to know and gain exclusive access
              when it goes live. Get ready to elevate your benefit like never before!
            </Text>
          </div>
        </Flex>
      </Modal>
    </>
  );
}
