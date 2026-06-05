import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DashboardPage from '../../app/role-first/dashboard/page';

const meta: Meta<typeof DashboardPage> = {
  title: 'Role-First / 대시보드 페이지',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'role-first 시맨틱 토큰 전체를 사용하는 서비스 모니터링 대시보드입니다. ' +
          '`success.*` · `error.*` · `warning.*` · `info.*` · `brand.*` · `primary.*` · `inverse.*` 토큰이 각 의미에 맞게 적용됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '전체 대시보드',
};
