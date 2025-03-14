import { NextRequest, NextResponse } from 'next/server'
import { projectData } from '@/app/api/project'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = await params.id

  if (id) {
    const project = projectData.find((proj) => proj.id === Number(id))
    if (project) {
      return NextResponse.json(project)
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
  } else {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 })
  }
}
