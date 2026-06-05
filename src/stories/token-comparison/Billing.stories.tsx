import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BillingPage from '../../app/role-first/billing/page';

const meta: Meta<typeof BillingPage> = {
  title: 'Role-First / 결제 및 구독 관리',
  component: BillingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'role-first 시맨틱 토큰을 사용하는 결제 및 구독 관리 페이지입니다. ' +
          '플랜 선택 카드(`brand.*`)·결제 수단·결제 내역 테이블·청구 요약에서 ' +
          '`success.*` · `error.*` · `warning.*` · `info.*` · `brand.*` · `primary.*` · `inverse.*` 토큰이 각 의미에 맞게 적용됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '전체 결제 페이지',
};
