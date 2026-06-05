import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DashboardPage from '../../app/property-first/dashboard/page';

const meta: Meta<typeof DashboardPage> = {
  title: 'Property-First / 대시보드 페이지',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'property-first 시맨틱 토큰 전체를 사용하는 서비스 모니터링 대시보드입니다. ' +
          '`surface.*` · `fill.*` · `border.*` · `icon.*` · `text.*` · `overlay.*` 토큰이 ' +
          '각 의미(positive · critical · warning · info · brand · neutral)에 맞게 적용됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '전체 대시보드',
};
