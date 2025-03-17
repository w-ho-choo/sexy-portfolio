import ProjectHeader from '@/components/ProjectHeader'
import Transition from '@/components/Transition'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <Transition>
        <ProjectHeader />
        {children}
      </Transition>
    </div>
  )
}
