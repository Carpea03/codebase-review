import React from 'react'
import StaffChris from '../components/staff/chris'
import StaffMartin from '../components/staff/martin'
import StaffMike from '../components/staff/mike'
import StaffWarren from '../components/staff/warren'
import StaffQi from '../components/staff/qi'
import StaffSean from '../components/staff/sean'
import StaffNaleesha from '../components/staff/naleesha'
import StaffAndrew from '../components/staff/andrew'
import StaffWillem from '../components/staff/willem'
import StaffRichard from '../components/staff/richard'

export default function TeamPatent() {
  return (
    <div className="not-format">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <StaffChris />
            <StaffMartin />
            <StaffQi />
            <StaffMike />
            <StaffWarren />
            <StaffSean />
            <StaffNaleesha />
            <StaffAndrew />
            <StaffWillem />
            <StaffRichard />
          </div>
        </div>
      </section>
    </div>
  )
}
