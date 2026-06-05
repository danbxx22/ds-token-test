import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NotificationsPage from '../../app/role-first/notifications/page';

const meta: Meta<typeof NotificationsPage> = {
  title: 'Role-First / 알림 센터',
  component: NotificationsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'role-first 시맨틱 토큰을 사용하는 알림 센터 페이지입니다. ' +
          '헤더·탭 바·필터 사이드바·알림 카드 8개에서 ' +
          '`success.*` · `error.*` · `warning.*` · `info.*` · `brand.*` · `primary.*` · `inverse.*` 토큰이 ' +
          '각 의미에 맞게 적용됩니다. ' +
          '읽지 않음(`brand.bg.low` 배경 + 강한 fg 좌측 강조선)과 ' +
          '읽음(`inverse.bg.base` 배경 + 연한 border 좌측 강조선) 상태를 시각적으로 구분합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '전체 알림 센터 페이지',
};
