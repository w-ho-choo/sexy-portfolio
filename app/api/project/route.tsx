import { NextRequest, NextResponse } from 'next/server'
import { projectData } from '../project'

export function GET(req: NextRequest) {
  return NextResponse.json(projectData)
}
